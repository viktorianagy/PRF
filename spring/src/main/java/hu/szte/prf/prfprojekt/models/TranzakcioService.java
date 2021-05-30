package hu.szte.prf.prfprojekt.models;

import java.util.List;

public interface TranzakcioService {
    void addTranzakcio(Tranzakcio tranzakcio);
    List<Tranzakcio> getAllTranzakcio();
    Tranzakcio getTranzakcioById(int id);
    void deleteTranzakcioById(int id);
}
