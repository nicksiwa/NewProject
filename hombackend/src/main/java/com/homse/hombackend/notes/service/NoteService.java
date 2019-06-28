package com.homse.hombackend.notes.service;

import com.homse.hombackend.notes.dto.NoteDTO;
import com.homse.hombackend.notes.entity.NoteHeader;

import java.util.List;

public interface NoteService {
    List<NoteHeader> findAllNoteHeader();
    NoteDTO findNoteHeaderById(Integer id);
    void saveOrUpdate(NoteDTO noteDTO);
    void deleteByNoteHeader(NoteDTO noteDTO);
}
