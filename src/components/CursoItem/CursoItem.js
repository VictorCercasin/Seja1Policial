import React from 'react';

import './CursoItem.css';



const TeacherItem = (props) => {
    return (
        <main>
            <article className="teacher-item">
                <header>
                    <img src={props.imgSrc} alt={props.imgAlt} />
                    <div>
                        <strong>
                            {props.name}
                        </strong>
                        <span>
                            {props.subject}
                        </span>
                    </div>
                </header>

                <p>
                    {props.description}
                </p>
                <footer>
                    <p>
                        Preço do curso
                            <strong> R$ {props.cost} </strong>
                    </p>
                    <button type="button">
                        Comprar o curso
                    </button>
                </footer>

            </article>
        </main>
    );
}

export default TeacherItem;