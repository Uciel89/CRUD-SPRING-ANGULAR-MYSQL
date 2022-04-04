package com.ucielcorp.backend.service;

import com.ucielcorp.backend.model.Persona;
import com.ucielcorp.backend.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonaServiceImp implements PersonaService {

    @Autowired
    private PersonaRepository repository;

    @Override
    public List<Persona> listar() {
        return repository.findAll();
    }

    @Override
    public Persona listarId(long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Persona add(Persona p) {
        return repository.save(p);
    }

    @Override
    public Persona deleted(long id) {
        Persona p = repository.findById(id).orElse(null);
        // Realizamos un verificación para saber si existe ese registro en la tabla
        if(p != null){
            repository.delete(p);
        }

        return p;
    }

    @Override
    public Persona edit(Persona p) {
        return repository.save(p);
    }
}
