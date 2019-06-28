package com.homse.hombackend.notes.dao;

import com.homse.hombackend.notes.entity.NoteDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteDetailDao extends JpaRepository<NoteDetail, Integer> {
    List<NoteDetail> findAllByNoteHeaderId(Integer id);
    void deleteAllByNoteHeaderId(Integer id);
}
