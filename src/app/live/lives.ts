export interface Lives {
  type: string;
  properties: {
    site_name: string;
    camera_image: string;
    air_temperature: number;
    precipitation_type: string;
    precipitation_intensity: string;
    wind_speed: number;
    road_surface_temperature: number;
    visibility_value: number;
    wind_direction_bearing: string;
    weather_description: string;
    weather_definition: string;
    order: number;
  };
  features: [
    {
      type: string;
      id: string;
      properties: {
        site_name: string;
        camera_image: string;
        air_temperature: number;
        precipitation_type: string;
        precipitation_intensity: string;
        wind_speed: number;
        road_surface_temperature: number;
        visibility_value: number;
        wind_direction_bearing: string;
        weather_description: string;
        weather_definition: string;
        order: number;
      };
      geometry:{
        type:string,
        coordinates:[]
      }
    }
  ];

}
export interface Live {
  
   
  
      
        timenow:string;
        datenow:string;
        site_name: string;
        camera_image: string;
        air_temperature: number;
        precipitation_type: string;
        precipitation_intensity: string;
        wind_speed: number;
        road_surface_temperature: number;
        visibility_value: number;
        wind_direction_bearing: string;
        weather_description: string;
        weather_definition: string;
        order: number;
      
     
    }
  



