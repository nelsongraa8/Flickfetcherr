# Flickfetcharr

**Flickfetcharr** es una aplicación de descarga automática de películas que simplifica el acceso a los últimos lanzamientos utilizando torrents. Basado en la información de **The Movie Database (TMDb)**, Flickfetcharr monitorea nuevas películas y las descarga automáticamente a través de torrents en cuanto están disponibles.

## Características Principales

- **Integración con TMDb**: Utiliza la base de datos de **The Movie Database** para buscar y monitorear nuevos lanzamientos de películas.
- **Automatización Completa**: Descarga automática de películas tan pronto como estén disponibles en torrents, sin necesidad de intervención manual.
- **Compatibilidad con Jackett**: Se conecta con **Jackett** para acceder a una variedad de indexadores de torrents, incluyendo **Dontorrent**, para obtener enlaces de manera eficiente.
- **Interfaz Amigable**: Fácil de configurar y usar para usuarios de todos los niveles de experiencia.
- **Notificaciones**: Configurable para recibir alertas sobre nuevas descargas y lanzamientos.
- **Gestión de Biblioteca**: Organiza y mantiene tu colección de películas automáticamente.

## Requisitos

- **Jackett**: Necesario para interactuar con diferentes indexadores de torrents.
- **Cliente de Torrent**: Compatible con los clientes de torrent más populares para manejar las descargas.
- **API Key de TMDb**: Se requiere una clave API gratuita de **The Movie Database** para acceder a la información de las películas.

## Instalación

1. **Descarga** o clona este repositorio en tu máquina local.

    ```bash
    git clone https://github.com/tu-usuario/flickfetcharr.git
    ```

1. **Instala** todas las librerias y dependencias necesarias.

    ```bash
    pnpm install
    ```

1. Configura** Jackett con los indexadores que prefieras.

    [https://github.com/Jackett/Jackett](https://github.com/Jackett/Jackett)

1. Configura API Key de Jackett en Flickfecharr.

1. Configura tu API Key de **TMDb** y otros parámetros en el archivo de configuración:

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas colaborar en el desarrollo de Flickfetcharr, sigue estos pasos:

1. Haz un fork del repositorio.
1. Crea una nueva rama con tu funcionalidad o corrección de errores: git checkout -b feature/nueva-funcionalidad.
1. Realiza tus cambios y haz un commit: git commit -m 'Añadir nueva funcionalidad'.
1. Haz push a tu rama: git push origin feature/nueva-funcionalidad.
1. Abre un pull request en GitHub.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Nota

¡Gracias por usar Flickfetcharr! Si tienes alguna pregunta o problema, no dudes en abrir un issue en el repositorio.
