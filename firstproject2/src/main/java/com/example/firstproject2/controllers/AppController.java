package com.example.firstproject2.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.firstproject2.entities.Etudiant;
import com.example.firstproject2.services.IEtudiantService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AppController {

    @Autowired
    IEtudiantService etudiantService;

    @RequestMapping(value = "/students")
    public ResponseEntity<Object> getStudents() {
        return new ResponseEntity<>(etudiantService.getAllEtudiant(), HttpStatus.OK);
    }

    @RequestMapping(value = "/students", method = RequestMethod.POST)
    public ResponseEntity<Object> addStudent(@RequestBody Etudiant student) {
        etudiantService.addEtudiant(new Etudiant(null, student.getName(), student.getDateOfBirth(),
                student.getDescription(), student.getEmail()));
        return new ResponseEntity<>( HttpStatus.OK);

    }

    @RequestMapping(value = "/students/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Object> updateStudent(@PathVariable("id") Long id, @RequestBody Etudiant student) {
        Optional<Etudiant> studentById = etudiantService.getEtudiant(id);
        if (studentById.isPresent()) {

            studentById.get().setName(student.getName());
            studentById.get().setDateOfBirth(student.getDateOfBirth());
            studentById.get().setDescription(student.getDescription());
            studentById.get().setEmail(student.getEmail());
            etudiantService.updateEtudiant(studentById.get());
            return new ResponseEntity<>( HttpStatus.OK);
        }
        return new ResponseEntity<>( HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value = "/students/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deleteStudent(@PathVariable("id") Long id) {
        Optional<Etudiant> student = etudiantService.getEtudiant(id);
        if (student.isPresent()) {
            etudiantService.deleteEtudiant(student.get().getId());
            return new ResponseEntity<>(id, HttpStatus.OK);

        }
        return new ResponseEntity<>( HttpStatus.NOT_FOUND);

    }

    @RequestMapping(value = "/students/{id}", method = RequestMethod.GET)
    public ResponseEntity<Object> getStudent(@PathVariable("id") Long id) {
        Optional<Etudiant> student = etudiantService.getEtudiant(id);
        if (student.isPresent()) {
            return new ResponseEntity<>(student.get(), HttpStatus.OK);

        }
        return new ResponseEntity<>("Failed: student not found", HttpStatus.NOT_FOUND);
    }

}
