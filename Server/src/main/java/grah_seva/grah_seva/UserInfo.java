package grah_seva.grah_seva;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "user_info")
@Data
public class UserInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "address")
    private String address;

    @Column(name = "govt_id")  // Government ID field
    private String govtId;

    @Column(name = "skill")  // User's skill
    private String skill;

    @Column(name = "contact_no", length = 10) // Contact number
    private String contactNo;

    @Column(name = "role", nullable = false)  // Adding Role (ADMIN / USER)
    private String role;
}
