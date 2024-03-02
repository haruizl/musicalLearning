package com.example.musicalLearningController.Entity;
import jakarta.persistence.*;

@Entity
@Table(name="users")
public class User {
    @Id
    @Column(name="user_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userid;


    @Column(name="name", length = 150)
    private String name;

    @Column(name="lastname", length = 150)
    private String lastname;
    @Column(name="email", length = 60)
    private String email;

    @Column(name="password", length = 255)
    private String password;

    public User(int userid, String name, String lastname, String email, String password) {
        this.userid = userid;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }

    public User() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "userid=" + userid +
                ", name='" + name + '\'' +
                ", lastname='" + lastname + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
