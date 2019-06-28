package com.homse.hombackend.notes.repository.impl;

import com.homse.hombackend.notes.dao.NoteDetailDao;
import com.homse.hombackend.notes.entity.NoteDetail;
import com.homse.hombackend.notes.repository.NoteDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class NoteDetailRepositoryImpl implements NoteDetailRepository {

    @Autowired
    private NoteDetailDao noteDetailDao;

    @Override
    public List<NoteDetail> findAll() {
        return noteDetailDao.findAll();
    }

    @Override
    public List<NoteDetail> findByNoteHeaderId(Integer id) {
        return noteDetailDao.findAllByNoteHeaderId(id);
    }

    @Override
    public NoteDetail saveOrUpdate(NoteDetail noteDetail) {
        return noteDetailDao.save(noteDetail);
    }

    @Override
    public void deleteAllByNoteHeaderId(Integer id) {
        noteDetailDao.deleteAllByNoteHeaderId(id);
    }
}
