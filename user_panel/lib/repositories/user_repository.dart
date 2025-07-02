import 'package:http/http.dart' as http;
import 'dart:convert';
import '../models/user.dart';

class UserRepository {
  final String apiUrl = 'http://<TU_BACKEND_API>/users';

  Future<List<User>> fetchUsers() async {
    final response = await http.get(Uri.parse(apiUrl));
    if (response.statusCode == 200) {
      List<dynamic> data = jsonDecode(response.body);
      return data.map((e) => User.fromJson(e)).toList();
    } else {
      throw Exception('Error al obtener usuarios');
    }
  }
}
