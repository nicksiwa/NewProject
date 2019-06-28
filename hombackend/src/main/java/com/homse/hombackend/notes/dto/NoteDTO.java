package com.homse.hombackend.notes.dto;

import com.homse.hombackend.notes.entity.NoteDetail;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
public class NoteDTO {

    private Integer id;
    private String noteHeaderName;
    private String noteHeaderDescription;
    private List<NoteDetail> noteDetailList;

    public NoteDTO(Integer id, String noteHeaderName, String noteHeaderDescription, List<NoteDetail> noteDetailList) {
        this.id = id;
        this.noteHeaderName = noteHeaderName;
        this.noteHeaderDescription = noteHeaderDescription;
        this.noteDetailList = noteDetailList;
    }

    public NoteDTO() {}
}