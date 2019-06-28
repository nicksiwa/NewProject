package com.homse.hombackend.notes.repository;

import com.homse.hombackend.notes.entity.NoteHeader;

import java.util.List;

public interface NoteHeaderRepository {
    List<NoteHeader> findAll();
    NoteHeader findById(Integer id);
    NoteHeader saveOrUpdate(NoteHeader noteHeader);
    void delete(NoteHeader noteHeader);
}
