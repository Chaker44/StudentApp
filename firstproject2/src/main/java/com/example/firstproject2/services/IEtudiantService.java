package com.example.firstproject2.services;

import java.util.List;
import java.util.Optional;

import com.example.firstproject2.entities.Etudiant;

public interface IEtudiantService {

    public Optional<Etudiant> getEtudiant(Long id);

    public Etudiant addEtudiant(Etudiant e);

    public Etudiant updateEtudiant(Etudiant e);

    public List<Etudiant> getAllEtudiant();
    public void deleteEtudiant(Long id);

}
