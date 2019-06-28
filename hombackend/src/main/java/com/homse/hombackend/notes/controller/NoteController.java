package com.homse.hombackend.notes.controller;

import com.homse.hombackend.notes.dto.NoteDTO;
import com.homse.hombackend.notes.entity.NoteHeader;
import com.homse.hombackend.notes.service.NoteService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/notes")
@Api(value = "/api/notes", description = "simple notes app", tags = { "Notes API" })
public class NoteController {

    private static final String CREATE = "/create";
    private static final String UPDATE = "/update";
    private static final String DELETE = "/delete";
    private static final String GET = "/get";

    @Autowired
    private NoteService noteService;

    @ApiOperation(value = "list all notes")
    @GetMapping(value = GET + "/list", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<NoteHeader>> getNoteHeaderList() {
        List<NoteHeader> noteHeaders = noteService.findAllNoteHeader();
        return new ResponseEntity<>(noteHeaders, HttpStatus.OK);
    }

    @ApiOperation(value = "display note by id")
    @GetMapping(value = GET + "/note/{id:.+}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<NoteDTO> getNoteById(@PathVariable Integer id) {
        NoteDTO noteDTO = noteService.findNoteHeaderById(id);
        return new ResponseEntity<>(noteDTO, HttpStatus.OK);
    }

    @ApiOperation(value = "create new note")
    @PostMapping(value = CREATE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveNote(@RequestBody NoteDTO noteDTO) {
        noteService.saveOrUpdate(noteDTO);
        return new ResponseEntity(HttpStatus.OK);
    }

    @ApiOperation(value = "update note")
    @PutMapping(value = UPDATE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateNote(@RequestBody NoteDTO noteDTO) {
        noteService.saveOrUpdate(noteDTO);
        return new ResponseEntity(HttpStatus.OK);
    }

    @ApiOperation(value = "delete note")
    @PostMapping(value = DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity deleteNote(@RequestBody NoteDTO noteDTO) {
        noteService.deleteByNoteHeader(noteDTO);
        return new ResponseEntity(HttpStatus.OK);
    }
}
