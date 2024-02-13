package com.example.musicalLearningController.Entity;
import jakarta.persistence.*;

@Entity
@Table(name="documentType")
public class DocumentType {
    @Id
    @Column(name="document_type_id", length = 15)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int documentTypeId;
    @Column(name="name", length = 5)
    private String name;
    @Column(name="description", length = 120)
    private String description;



    public DocumentType(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public DocumentType() {
    }

    public int getDocumentTypeId() {
        return documentTypeId;
    }

    public void setDocumentTypeId(int documentTypeId) {
        this.documentTypeId = documentTypeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "DocumentType{" +
                "documentTypeId=" + documentTypeId +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
