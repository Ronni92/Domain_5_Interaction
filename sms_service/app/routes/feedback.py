from flask import Blueprint, request, jsonify
from app.models import db, Feedback
from app.strategies.bug import handle_bug
from app.strategies.suggestion import handle_suggestion
from app.strategies.complaint import handle_complaint

feedback_bp = Blueprint('feedback', __name__)

strategy_map = {
    'bug': handle_bug,
    'suggestion': handle_suggestion,
    'complaint': handle_complaint
}

@feedback_bp.route('/submit', methods=['POST'])
def submit_feedback():
    data = request.get_json()
    f_type = data.get('type')
    content = data.get('content')

    if f_type not in strategy_map:
        return jsonify({'error': 'Tipo de feedback no válido'}), 400

    feedback = Feedback(type=f_type, content=content)
    db.session.add(feedback)
    db.session.commit()

    result = strategy_map[f_type](content)
    return jsonify({'message': result})

@feedback_bp.route('/all', methods=['GET'])
def get_all_feedback():
    feedbacks = Feedback.query.all()
    return jsonify([{'id': f.id, 'type': f.type, 'content': f.content} for f in feedbacks])
