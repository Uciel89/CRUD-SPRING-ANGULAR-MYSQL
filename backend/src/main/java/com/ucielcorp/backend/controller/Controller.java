package com.ucielcorp.backend.controller;

import com.ucielcorp.backend.model.Persona;
import com.ucielcorp.backend.service.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Hacemos referencia a la ubicación de nuestro FrontEnd
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/personas"})
public class Controller {

    /***===/ Con este controlador, vamos a pasar todo el servicio que necesita el frontend desde el backend /===***/

    @Autowired
    PersonaService service;

    // Método para obtener los datos de la tabla personas
    @GetMapping
    public List<Persona> getAllPerson(){
        return service.listar();
    }

    // Método para obtener una persona mediante su id
    @GetMapping(path ={"/{id}"})
    public Persona getOnePersona(@PathVariable ("id") long id){
        return service.listarId(id);
    }

    // Método para cargar una nueva persona dentro de la tabla persona
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public Persona createPerson(@RequestBody Persona p){
        return service.add(p);
    }

    // Método para editar una persona dentro de la tabla personas
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping(path = {"/{id}"})
    public Persona editPersona(@RequestBody Persona p, @PathVariable("id") int id){
        p.setId(id);
        return service.edit(p);
    }

    // Método para eliminar un registro de la tabla
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping(path = {"/{id}"})
    public Persona delete(@PathVariable("id") long id){
        return service.deleted(id);
    }
}
