# Reto Vinculacion Rentable - Team Cheems

Nuestro entregable consiste en un dashboard que muestra insights de valor asi como una segmentacion por clusters, que representan el nivel de rentabilidad. 

# Files

En la carpeta "model" se encuentra un notebook de Jupyter con todo el código del modelo de clustering y transformación de datos. Los archivos restantes corresponden a un sitio web que no se logró desplegar exitosamente utilizando el protocolo HTTPS. 

# Sobre la implementación

Se empleó Bootstrap para realizar la siguiente aplicación web).

![Front-end de la Aplicación Web](https://i.ibb.co/4jV9vdG/maqueta.png)

Para desplegar la aplicación web se utilizó una instancia de EC2. 

![Instancia de EC2](https://i.ibb.co/93YcvGX/ec2.jpg)

En ella, se pensaba embeber el siguiente dashboard elaborado en QuickSight. 

![Dashboard](https://i.ibb.co/qp9GLsB/Whats-App-Image-2021-10-24-at-10-28-45-AM.jpg)

No obstante, QuickSight solicita un dominio seguro para desplegar el dashboard. 

Pese a la configuración realizada en la instancia para utilizar el protocolo HTTPS con un grupo de seguridad, la conexión no se pudo establecer de manera exitosa dado que no se generó un certificado SSL válido. Sin embargo, esta es una situación que puede revisarse durante una futura implementación.

# AWS

La propuesta de solución utilizando tecnología de AWS es:

![Arquitectura AWS](https://i.ibb.co/7tN864L/aws.png)