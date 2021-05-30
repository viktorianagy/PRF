package hu.szte.prf.prfprojekt.contollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hu.szte.prf.prfprojekt.models.Tranzakcio;
import hu.szte.prf.prfprojekt.models.TranzakcioService;

@RestController
@RequestMapping
@CrossOrigin(origins = "*")
public class TranzakcioContoller {
    TranzakcioService tranzakcioService;

    @Autowired
    public TranzakcioContoller(TranzakcioService tranzakcioService) {
        this.tranzakcioService = tranzakcioService;
    }

    @GetMapping("/")
    public String helloWorld() {
        return "Hello World!";
    }

    @PostMapping(path="/tranzakcio", consumes = "application/json")
    public String newTranzakcio(@RequestBody Tranzakcio tranzakcio) {
        try {
            this.tranzakcioService.addTranzakcio(tranzakcio);
            return "Success";
        } catch (Exception e) {
            System.out.println(e);
            return "Error during the create operation";
        }
    }

    @GetMapping("/tranzakciok")
    public List<Tranzakcio> getAllTranzakcio() {
        try {
            return this.tranzakcioService.getAllTranzakcio();
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @GetMapping("/tranzakcio")
    public Tranzakcio getTranzakcioById(@RequestParam int id) {
        try {
            return this.tranzakcioService.getTranzakcioById(id);
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @DeleteMapping("/tranzakcio")
    public String deleteTranzakcioById(@RequestParam int id) {
        try {
            this.tranzakcioService.deleteTranzakcioById(id);
            return "Delete Successful";
        } catch (Exception e) {
            System.out.println(e);
            return "Error during deletion";
        }
    }
}
