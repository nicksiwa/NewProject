package com.homse.hombackend.notes.entity;

import com.homse.hombackend.infrastructure.model.AbstractAuditingEntity;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SelectBeforeUpdate;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "note_header")
@DynamicUpdate
@SelectBeforeUpdate
@Getter @Setter
public class NoteHeader extends AbstractAuditingEntity implements Serializable {

    private static final long serialVersionUID = -1856770221641297455L;

    @Id
    @SequenceGenerator(name = "pk_sequence", sequenceName = "note_header_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pk_sequence")
    @Column(name = "note_header_id", nullable = false)
    private Integer id;

    @Column(name = "note_name", nullable = false, length = 100)
    private String noteName;

    @Column(name = "note_description")
    private String noteDescription;
}
