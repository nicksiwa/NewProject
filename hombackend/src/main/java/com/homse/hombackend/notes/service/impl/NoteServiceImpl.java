package com.homse.hombackend.notes.service.impl;

import com.homse.hombackend.notes.dto.NoteDTO;
import com.homse.hombackend.notes.entity.NoteDetail;
import com.homse.hombackend.notes.entity.NoteHeader;
import com.homse.hombackend.notes.mapper.NoteDTOMapper;
import com.homse.hombackend.notes.repository.NoteDetailRepository;
import com.homse.hombackend.notes.repository.NoteHeaderRepository;
import com.homse.hombackend.notes.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class NoteServiceImpl implements NoteService {

    @Autowired
    private NoteHeaderRepository noteHeaderRepository;

    @Autowired
    private NoteDetailRepository noteDetailRepository;

    @Override
    public List<NoteHeader> findAllNoteHeader() {
        return noteHeaderRepository.findAll();
    }

    @Override
    public NoteDTO findNoteHeaderById(Integer id) {
        NoteHeader noteHeader = noteHeaderRepository.findById(id);
        List<NoteDetail> noteDetails = noteDetailRepository.findByNoteHeaderId(id);
        NoteDTO noteDTO = new NoteDTO(noteHeader.getId(), noteHeader.getNoteName(), noteHeader.getNoteDescription(), noteDetails);
        return noteDTO;
    }

    @Override
    public void saveOrUpdate(NoteDTO noteDTO) {
        try {
            NoteHeader noteHeader = NoteDTOMapper.getNoteHeader(noteDTO);
            noteHeaderRepository.saveOrUpdate(noteHeader);
            List<NoteDetail> noteDetails  = noteDTO.getNoteDetailList();
            noteDetails.forEach(noteDetail -> {
                noteDetail.setNoteHeader(noteHeader);
                noteDetailRepository.saveOrUpdate(noteDetail);
            });
        } catch (Exception e) {
            throw e;
        }

    }

    @Override
    public void deleteByNoteHeader(NoteDTO noteDTO) {
        try {
            noteDetailRepository.deleteAllByNoteHeaderId(noteDTO.getId());
            noteHeaderRepository.delete(NoteDTOMapper.getNoteHeader(noteDTO));
        } catch (Exception e) {
            throw e;
        }
    }
}
