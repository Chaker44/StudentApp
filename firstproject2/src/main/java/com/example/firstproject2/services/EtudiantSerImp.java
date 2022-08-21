package com.example.firstproject2.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.firstproject2.entities.Etudiant;
import com.example.firstproject2.repositories.EtudiantRepository;

@Service
public class EtudiantSerImp implements IEtudiantService {

    @Autowired
    EtudiantRepository etudiantRepo;

    @Override
    public Optional<Etudiant> getEtudiant(Long id) {
        return etudiantRepo.findById(id);
    }

    @Override
    public Etudiant addEtudiant(Etudiant e) {
        return etudiantRepo.save(e);
    }

    @Override
    public Etudiant updateEtudiant(Etudiant e) {
        return etudiantRepo.save(e);
    }

    @Override
    public List<Etudiant> getAllEtudiant() {
        return etudiantRepo.findAll();
    }

    @Override
    public void deleteEtudiant(Long id) {
        etudiantRepo.deleteById(id);

    }

}
