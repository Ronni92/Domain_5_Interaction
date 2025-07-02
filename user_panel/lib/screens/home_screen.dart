import 'package:flutter/material.dart';
import '../services/websocket_service.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  late WebSocketService _webSocketService;
  String _message = 'Esperando notificaciones...';

  @override
  void initState() {
    super.initState();
    _webSocketService = WebSocketService(onMessageReceived: (msg) {
      setState(() {
        _message = msg;
      });
    });
    _webSocketService.connect();
  }

  @override
  void dispose() {
    _webSocketService.disconnect();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Panel de Usuario')),
      body: Center(
        child: Text(
          _message,
          style: const TextStyle(fontSize: 18),
        ),
      ),
    );
  }
}
