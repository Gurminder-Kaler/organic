import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Word {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    score: number;
}
