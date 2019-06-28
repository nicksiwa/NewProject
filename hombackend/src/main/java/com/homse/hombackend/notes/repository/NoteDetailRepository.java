package com.homse.hombackend.notes.repository;

import com.homse.hombackend.notes.entity.NoteDetail;

import java.util.List;

public interface NoteDetailRepository {
    List<NoteDetail> findAll();
    List<NoteDetail> findByNoteHeaderId(Integer id);
    NoteDetail saveOrUpdate(NoteDetail noteDetail);
    void deleteAllByNoteHeaderId(Integer id);
}
