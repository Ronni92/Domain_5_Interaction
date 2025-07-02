export const handleStatsUpdate = async (event) => {
  // Aquí se podrían guardar métricas, generar alertas, etc.
  const { type, payload } = event;
  switch (type) {
    case 'NEW_USER':
      console.log(`👤 Nuevo usuario registrado: ${payload.email}`);
      break;
    case 'ERROR_LOG':
      console.log(`⚠️ Error en servicio ${payload.service}: ${payload.message}`);
      break;
    default:
      console.log(`ℹ️ Evento no manejado: ${type}`);
  }
};
