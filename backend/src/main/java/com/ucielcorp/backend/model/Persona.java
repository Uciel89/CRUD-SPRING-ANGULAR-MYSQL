package com.ucielcorp.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "personas")
public class Persona {

    /**===/ Definimos todos los campos que tenemos dentro de nuestra tabla personas /===**/

    // Clave primaria
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    // Demas columnas
    @Column
    private String name;

    @Column
    private String lastName;

    @Column
    private String phone;

    // Métodos GET y SET
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
