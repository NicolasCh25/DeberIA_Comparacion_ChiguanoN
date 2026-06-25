import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';

//  Configura el decorador @Component con standalone true e importa CommonModule e IonicModule
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class HomePage {
  // Declara las variables para latitude, longitude y errorMessage inicializadas en null
  latitude: number | null = null;
  longitude: number | null = null;
  errorMessage: string | null = null;

  constructor() {}

  // Define el metodo asincrono obtenerUbicacion() y limpia los estados de las variables al iniciar
  async obtenerUbicacion() {
    this.latitude = null;
    this.longitude = null;
    this.errorMessage = null;

    try {
      // Llama a Geolocation.checkPermissions() y guarda el resultado en una variable
      let permStatus = await Geolocation.checkPermissions();

      // Si los permisos estan denegados muestra un mensaje informando que los active en ajustes
      if (permStatus.location === 'denied') {
        this.errorMessage = 'El permiso de ubicación está denegado. Por favor, habilítelo en la configuración de su dispositivo.';
        return;
      }

      //  Si el estado de permisos es prompt solicita permisos usando Geolocation.requestPermissions()
      if (permStatus.location === 'prompt' || permStatus.location === 'prompt-with-rationale') {
        permStatus = await Geolocation.requestPermissions();
        // Prompt: Si tras la solicitud el permiso no es granted guarda un mensaje de error y cancela
        if (permStatus.location !== 'granted') {
          this.errorMessage = 'Permiso de ubicación denegado por el usuario.';
          return;
        }
      }

      //  Llama a Geolocation.getCurrentPosition pasando opciones de alta precision y timeout de 10 segundos
      const position = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      });

      //  Asigna las coordenadas latitude y longitude obtenidas de la posicion actual de Capacitor
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;

    } catch (error: any) {
      console.error('Error al obtener la ubicación:', error);

      // Dentro del catch maneja el error codigo 1 o texto denied asignando error de acceso denegado
      if (
        error.code === 1 || 
        (error.message && (
          error.message.toLowerCase().includes('denied') || 
          error.message.toLowerCase().includes('permission')
        ))
      ) {
        this.errorMessage = 'Acceso a la ubicación denegado. Verifique los permisos de la aplicación.';
      //  Maneja el error codigo 2 o texto disabled asignando que el GPS del dispositivo esta apagado
      } else if (
        error.code === 2 || 
        (error.message && (
          error.message.toLowerCase().includes('unavailable') || 
          error.message.toLowerCase().includes('not enabled') || 
          error.message.toLowerCase().includes('disabled') || 
          error.message.toLowerCase().includes('turned off')
        ))
      ) {
        this.errorMessage = 'El GPS o los servicios de ubicación están apagados/no disponibles. Por favor, actívelos en su dispositivo.';
      //  Maneja el error codigo 3 o texto timeout indicando que se agoto el tiempo de espera
      } else if (
        error.code === 3 || 
        (error.message && error.message.toLowerCase().includes('timeout'))
      ) {
        this.errorMessage = 'Se agotó el tiempo de espera para obtener la ubicación. Inténtelo de nuevo en un espacio más abierto.';
      //  Para cualquier otro error no mapeado concatena el mensaje de error del sistema
      } else {
        this.errorMessage = `Error al obtener la ubicación: ${error.message || error}`;
      }
    }
  }

  //  Crea la funcion getGoogleMapsUrl() que verifique que las coordenadas existan y retorne la cadena de mapas externa
  getGoogleMapsUrl(): string {
    if (this.latitude !== null && this.longitude !== null) {
      return `https://www.google.com/maps?q=${this.latitude},${this.longitude}`;
    }
    return '';
  }
}