package grah_seva.grah_seva;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/GrahSeva")
public class GrahSevaController {

    private static final Logger logger = LoggerFactory.getLogger(GrahSevaController.class);

    @Autowired
    private GrahSevaService grahSevaService;

    @PostMapping("/registerUser")
    public ResponseEntity<String> registerUser(@RequestBody UserInfo userInfo) {
        try {
            String response = grahSevaService.registerUser(userInfo);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("Error during user registration", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during registration");
        }
    }

    @PostMapping("/loginUser")
    public ResponseEntity<String> loginUser(@RequestBody UserInfo userInfo) {
        try {
            return grahSevaService.loginUser(userInfo);
        } catch (Exception e) {
            logger.error("Error during user login", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during login");
        }
    }

    @GetMapping("/users")
    public ResponseEntity<List<UserInfo>> usersList() {
        List<UserInfo> users = grahSevaService.findAll();
        return ResponseEntity.ok(users);
    }

    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Integer id, @RequestParam String requesterEmail) {
        try {
            grahSevaService.deleteUser(id, requesterEmail);
            return ResponseEntity.ok("User deleted successfully");
        } catch (RuntimeException e) {
            if (e.getMessage().contains("not found")) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
            } else {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
            }
        }
    }
}
