package com.example.spring_backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class Admin {

    @Id
    @Column(name = "user_id", length = 45)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userid;

    @Column(name = "user_name", length = 255)
    private String username;

    @Column(name = "email", length = 255)
    private String email;

    @Column(name = "password", length = 255)
    private String password;

    public Admin(int userid, String password, String email, String username) {
        this.userid = userid;
        this.password = password;
        this.email = email;
        this.username = username;
    }

    public Admin() {
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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
        return "Admin{" +
                "userid=" + userid +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}

