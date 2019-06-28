package com.homse.hombackend.notes.dao;

import com.homse.hombackend.notes.entity.NoteHeader;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteHeaderDao extends JpaRepository<NoteHeader, Integer> {
}
