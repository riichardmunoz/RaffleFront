# Introduction 
El objetivo principal de este proyecto es desarrollar una API robusta que aborde los retos a los que se enfrentan varios clientes a la hora de asignar números únicos de 5 dígitos a los usuarios que participan en sistemas de lotería. Actualmente, los clientes se integran con una API gratuita que asigna números dentro de un rango común (00001 a 99999), pero este sistema carece de la capacidad de garantizar la unicidad por cliente. Esta limitación provoca posibles conflictos cuando varios clientes operan simultáneamente, poniendo en peligro la integridad de sus sistemas de lotería.

Para hacer frente a este problema, la API está diseñada para asignar números únicos de 5 dígitos específicos para cada cliente, lo que permite la participación fluida de los usuarios en diversas aplicaciones basadas en la lotería, como sistemas de bingo, sistemas de punto de venta, soluciones ERP y plataformas de comercio electrónico. La solución se adhiere a los principios de diseño SOLID y Arquitectura Limpia, garantizando la escalabilidad y la facilidad de mantenimiento.

Mediante la aplicación de una arquitectura en forma de cebolla (o arquitectura hexagonal), el proyecto separa eficazmente las preocupaciones, lo que permite establecer límites claros entre las distintas capas de la aplicación. Esta estructura mejora la capacidad de prueba y promueve una base de código más limpia. La API está protegida con una clave de autenticación y bien documentada mediante Swagger, lo que facilita su integración y uso por parte de los clientes.

Además de la API backend desarrollada en .NET 8 con C#, utilizando ADO.NET (Dapper) para la gestión de productos y Entity Framework para la asignación de números, se ha desarrollado una interfaz front-end fácil de usar utilizando Angular. Esta interfaz permite a los clientes gestionar sus productos y números asignados sin esfuerzo.

El proyecto también hace hincapié en el aseguramiento de la calidad, incorporando pruebas unitarias para asegurar una cobertura mínima del 80%, garantizando así la fiabilidad y robustez de las funcionalidades implementadas. En general, esta API tiene como objetivo proporcionar una solución fiable y eficiente para los clientes, mejorando sus capacidades operativas en la gestión de sistemas de lotería, al tiempo que se adhiere a las mejores prácticas en el desarrollo de software.

# Getting Started
1.	Clonar el repositorio "RaffleFront" del boton "Clone" y la url HTTPS.
2.	Una vez clonado localmente, ejecutar el comando 2npm install"
Nota: La version NodeJs es la 16.10.0.
3.	Una vez instalado el ambiente, ejecutar con "npm start"

# Estructure
1. La página tiene 2 pestañas:
- Crear producto: el cual se encarga de crear un Producto, se le debe proporcionar un nombre y opcional una descripción.
- Asignar número: Debe elegir un sorteo o producto y un usuario, el cual es el cliente del producto (No del sistema).
