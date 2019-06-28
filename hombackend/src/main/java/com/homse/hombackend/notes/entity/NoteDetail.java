package com.homse.hombackend.notes.entity;

import com.homse.hombackend.infrastructure.model.AbstractAuditingEntity;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SelectBeforeUpdate;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "note_detail")
@DynamicUpdate
@SelectBeforeUpdate
@Getter @Setter
public class NoteDetail extends AbstractAuditingEntity implements Serializable {

    private static final long serialVersionUID = -3589162620461260120L;

    @Id
    @SequenceGenerator(name = "pk_sequence", sequenceName = "note_detail_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pk_sequence")
    @Column(name = "note_detail_id", nullable = false)
    private Integer id;

    @Column(name = "note_detail", nullable = false)
    private String noteDetail;

    @ManyToOne
    @JoinColumn(name = "note_header_id", referencedColumnName = "note_header_id", foreignKey = @ForeignKey(name = "note_detail_fk1"))
    private NoteHeader noteHeader;
}
