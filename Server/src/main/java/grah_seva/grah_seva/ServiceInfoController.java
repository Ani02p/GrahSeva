package grah_seva.grah_seva;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/services")
public class ServiceInfoController {

    @Autowired
    private ServiceInfoService serviceInfoService;

    @PostMapping("/add")
    public ResponseEntity<String> addService(@RequestBody ServiceInfo service) {
        try {
            return ResponseEntity.ok(serviceInfoService.addService(service));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<ServiceInfo>> getAllServices() {
        return ResponseEntity.ok(serviceInfoService.getAllServices());
    }


    @GetMapping("/{id}")
    public ResponseEntity<ServiceInfo> getServiceById(@PathVariable Long id) {
        Optional<ServiceInfo> service = serviceInfoService.getServiceById(id);
        return service.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteService(@PathVariable Long id) {
        System.out.println("Deleting service with ID: "+id);
        return ResponseEntity.ok(serviceInfoService.deleteService(id));
    }
}
