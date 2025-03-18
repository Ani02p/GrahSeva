package grah_seva.grah_seva;

import java.util.List; // ✅ Correct import
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class GrahSevaService {

    @Autowired
    private GrahSevaRepository grahSevaRepository;

    public String registerUser(UserInfo userInfo) throws Exception {
        log.info("Inside registerUserMethod {}", userInfo);
        try {
            Optional<UserInfo> usersByEmail = grahSevaRepository.findByEmail(userInfo.getEmail());
            if (usersByEmail.isPresent()) {
                throw new Exception("User already exists");
            }
            grahSevaRepository.save(userInfo);
            return "User registered successfully";
        } catch (Exception e) {
            log.error("Inside register exception block", e);
            throw new Exception(e);
        }
    }

    public ResponseEntity<String> loginUser(UserInfo userInfo) {
        log.info("Inside loginUserMethod {}", userInfo.getEmail());
        try {
            Optional<UserInfo> usersByEmail = grahSevaRepository.findByEmail(userInfo.getEmail());
            if (usersByEmail.isPresent()) {
                return ResponseEntity.ok("Login Successful");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User doesn't exist");
            }
        } catch (Exception e) {
            log.error("Inside login exception block", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during login");
        }
    }

    public List<UserInfo> findAll() {

        return grahSevaRepository.findAll();
    }

    public void deleteUser(Integer id, String requesterEmail) {
        Optional<UserInfo> requester = grahSevaRepository.findByEmail(requesterEmail);

        if (requester.isEmpty() || !"ADMIN".equalsIgnoreCase(requester.get().getRole())) {
            throw new RuntimeException("Access Denied: Only admins can delete users.");
        }

        Optional<UserInfo> userToDelete = grahSevaRepository.findById(id);
        if (userToDelete.isPresent()) {
            grahSevaRepository.deleteById(id);
        } else {
            throw new RuntimeException("User not found with id: " + id);
        }
    }
}
