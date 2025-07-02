import 'package:flutter/material.dart';
import 'screens/home_screen.dart';

void main() {
  runApp(const UserPanelApp());
}

class UserPanelApp extends StatelessWidget {
  const UserPanelApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'User Panel',
      theme: ThemeData(primarySwatch: Colors.teal),
      home: const HomeScreen(),
    );
  }
}
