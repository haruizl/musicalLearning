package com.example.MusicalLearningController;

import com.example.musicalLearningController.Entity.DocumentType;
import com.example.musicalLearningController.Repo.DocumentTypeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

import java.util.Arrays;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class MusicalLearningControllerApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(MusicalLearningControllerApplication.class, args);
	}

	@Autowired
	DocumentTypeRepo documentTypeRepo;
	@Override
	public void run(String... args) throws Exception
	{
		// Inserting the data in the mysql table.
		documentTypeRepo.saveAll(Arrays.asList(

				new DocumentType("CC","Cédula de ciudadanía"),
				new DocumentType("CE","Cédula de extranjería"),
				new DocumentType("TI","Tarjeta de identidad"))

		);
	}
}
