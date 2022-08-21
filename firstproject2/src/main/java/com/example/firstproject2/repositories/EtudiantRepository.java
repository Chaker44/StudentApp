package com.example.firstproject2.repositories;

import com.example.firstproject2.entities.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;;

public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {

}
