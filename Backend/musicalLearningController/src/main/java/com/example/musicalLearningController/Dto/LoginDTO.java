package com.example.musicalLearningController.Dto;

public class LoginDTO {
    private String documentNumber;
    private String documentType;
    private String password;

    public LoginDTO(String documentNumber, String documentType, String password) {
        this.documentNumber = documentNumber;
        this.documentType = documentType;
        this.password = password;
    }

    public LoginDTO() {
    }

    public String getDocumentNumber() {
        return documentNumber;
    }

    public void setDocumentNumber(String documentNumber) {
        this.documentNumber = documentNumber;
    }

    public String getDocumentType() {
        return documentType;
    }

    public void setDocumentType(String documentType) {
        this.documentType = documentType;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "LoginDTO{" +
                "documentNumber='" + documentNumber + '\'' +
                ", documentType='" + documentType + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}