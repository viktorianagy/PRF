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

import hu.szte.prf.prfprojekt.models.Termek;
import hu.szte.prf.prfprojekt.models.TermekService;

@RestController
@RequestMapping
@CrossOrigin(origins = "*")
public class TermekController {
    TermekService termekService;

    @Autowired
    public TermekController(TermekService termekService) {
        this.termekService = termekService;
    }

    @GetMapping("/")
    public String helloWorld() {
        return "Hello World!";
    }

    @PostMapping(path="/termek", consumes = "application/json")
    public String newTermek(@RequestBody Termek termek) {
        try {
            this.termekService.addTermek(termek);
            return "Success";
        } catch (Exception e) {
            System.out.println(e);
            return "Error during the create operation";
        }
    }

    @GetMapping("/termekek")
    public List<Termek> getAllTermek() {
        try {
            return this.termekService.getAllTermek();
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @GetMapping("/termek")
    public Termek getTermekById(@RequestParam int id) {
        try {
            return this.termekService.getTermekById(id);
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @DeleteMapping("/termek")
    public String deleteTermekById(@RequestParam int id) {
        try {
            this.termekService.deleteTermekById(id);
            return "Delete Successful";
        } catch (Exception e) {
            System.out.println(e);
            return "Error during deletion";
        }
    }
}
