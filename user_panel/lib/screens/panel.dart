import 'package:flutter/material.dart';
import '../services/usuarioService.dart';

class PanelUsuario extends StatelessWidget {
  final usuarioService = UsuarioService();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Panel de Usuario")),
      body: FutureBuilder(
        future: usuarioService.obtenerUsuario("123"),
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            final usuario = snapshot.data!;
            return ListTile(
              title: Text(usuario.nombre),
              subtitle: Text(usuario.correo),
            );
          } else if (snapshot.hasError) {
            return Text("Error: ${snapshot.error}");
          }
          return CircularProgressIndicator();
        },
      ),
    );
  }
}
