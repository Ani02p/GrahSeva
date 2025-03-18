package grah_seva.grah_seva;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;

@Service
public class ServiceInfoService {

    @Autowired
    private ServiceInfoRepository serviceRepository;

    public String addService(ServiceInfo service) {
        serviceRepository.save(service);
        return "Service added successfully!";
    }

    public List<ServiceInfo> getAllServices() {
        return serviceRepository.findAll();
    }

    public Optional<ServiceInfo> getServiceById(Long id) {
        return serviceRepository.findById(id);
    }

    public String deleteService(Long id) {
        if (serviceRepository.existsById(id)) {
            serviceRepository.deleteById(id);
            return "Service deleted successfully!";
        } else {
            return "Service not found!";
        }
    }
}
