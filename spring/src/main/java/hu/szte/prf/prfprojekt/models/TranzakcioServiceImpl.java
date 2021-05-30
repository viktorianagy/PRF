package hu.szte.prf.prfprojekt.models;

import java.util.List;

public class TranzakcioServiceImpl implements TranzakcioService{

    TranzakcioRepository tranzakcioRepository;

    public TranzakcioServiceImpl(TranzakcioRepository tranzakcioRepository) {
        this.tranzakcioRepository = tranzakcioRepository;
    }

    @Override
    public void addTranzakcio(Tranzakcio tranzakcio) {
        this.tranzakcioRepository.save(tranzakcio);
        
    }

    @Override
    public List<Tranzakcio> getAllTranzakcio() {
        List<Tranzakcio> list = this.tranzakcioRepository.findAll();
        return list;
    }

    @Override
    public Tranzakcio getTranzakcioById(int id) {
        Tranzakcio tranzakcio = this.tranzakcioRepository.findById(id).get();
        return tranzakcio;
    }

    @Override
    public void deleteTranzakcioById(int id) {
        this.tranzakcioRepository.deleteById(id);
    }
    
}
