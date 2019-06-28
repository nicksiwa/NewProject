package com.homse.hombackend.notes.mapper;

import com.homse.hombackend.notes.dto.NoteDTO;
import com.homse.hombackend.notes.entity.NoteHeader;

public class NoteDTOMapper {

    public static NoteHeader getNoteHeader(NoteDTO noteDTO) {
        NoteHeader noteHeader = new NoteHeader();
        noteHeader.setId(noteDTO.getId());
        noteHeader.setNoteName(noteDTO.getNoteHeaderName());
        noteHeader.setNoteDescription(noteDTO.getNoteHeaderDescription());

        return noteHeader;
    }
}
