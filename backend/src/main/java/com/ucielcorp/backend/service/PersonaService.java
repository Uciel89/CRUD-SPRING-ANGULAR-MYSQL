package com.ucielcorp.backend.service;

import com.ucielcorp.backend.model.Persona;

import java.util.List;

public interface PersonaService {

    /**===/ Definimos todos los métodos que vamos a manejar en la interacción la DB /===**/

    // Métodos para listar las personas de la tabla personas
    List<Persona> listar();
    Persona listarId(long id);

    // Método para agregar personas a la tabla personas
    Persona add(Persona p);

    // Método para eliminar personas a la tabla personas
    Persona deleted(long id);

    // Método para editar una persona de la tabla personas
    Persona edit(Persona p);
}
