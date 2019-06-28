package com.homse.hombackend.notes.repository.impl;

import com.homse.hombackend.infrastructure.exception.ResourceNotFoundException;
import com.homse.hombackend.notes.dao.NoteHeaderDao;
import com.homse.hombackend.notes.entity.NoteHeader;
import com.homse.hombackend.notes.repository.NoteHeaderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class NoteHeaderRepositoryImpl implements NoteHeaderRepository {

    @Autowired
    private NoteHeaderDao noteHeaderDao;

    @Override
    public List<NoteHeader> findAll() {
        return noteHeaderDao.findAll();
    }

    @Override
    public NoteHeader findById(Integer id) {
        return noteHeaderDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Note header not found with id " + id));
    }

    @Override
    public NoteHeader saveOrUpdate(NoteHeader noteHeader) {
        return noteHeaderDao.save(noteHeader);
    }

    @Override
    public void delete(NoteHeader noteHeader) {
        noteHeaderDao.delete(noteHeader);
    }
}
