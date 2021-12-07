import React, {Component} from 'react';
import BoardService from '../service/BoardService'

class ListBoardComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            boards: []
        }
    }
    componentDidMount() {
        BoardService.getBoards().then((res) => {
            this.setState({boards: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Hellcoding Board</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>No.</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                            <th>수정일</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.boards.map(
                                board =>
                                    <tr key = {board.id}>
                                        <td> {board.no} </td>
                                        <td> {board.title} </td>
                                        <td> {board.creator} </td>
                                        <td> {board.createdTime} </td>
                                        <td> {board.updatedTime} </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListBoardComponent;