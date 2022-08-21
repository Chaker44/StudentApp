package com.example.firstproject2;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.firstproject2.entities.Etudiant;
import com.example.firstproject2.services.IEtudiantService;

@SpringBootApplication
public class Firstproject2Application implements CommandLineRunner {


	@Autowired
    IEtudiantService etudiantService;
	public static void main(String[] args) {
		SpringApplication.run(Firstproject2Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		etudiantService.addEtudiant(new Etudiant(null,"Chaker",new Date(),"Full Stack developer","eljchaker474@gmail.com"));
		etudiantService.addEtudiant(new Etudiant(null,"Mootez",new Date(),"Full Stack developer","eljmootez474@gmail.com"));
		etudiantService.addEtudiant(new Etudiant(null,"Said",new Date(),"Full Stack developer","eljsaid474@gmail.com"));
		etudiantService.addEtudiant(new Etudiant(null,"Souhaib",new Date(),"Full Stack developer","eljsouhaib474@gmail.com"));
		
	}

}
