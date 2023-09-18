function index(req, res) {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM curso", (err, cursos) => {
            if (err) {
                res.json(err);
            }
            res.render("cursos/index", { cursos });
        });
    });
}

function create(req, res) {
    res.render('cursos/create');
}

function store(req, res) {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO curso SET ?', [data], (err, rows) => {
            res.redirect('/cursos');
        });
    });
}

function destroy(req, res) {
    const id = req.body.id;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM curso WHERE id = ?', [id], (err, rows) => {
            res.redirect('/cursos');
        });
    })
}

function edit(req, res) {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM curso WHERE id = ?', [id], (err, cursos) => {
            if (err) {
                res.json(err);
            }
            res.render('cursos/edit', { cursos });
        });
    });
}

function update(req, res) {
    const id = req.params.id;
    const data = req.body;
  
    req.getConnection((err, conn) => {
      conn.query('UPDATE curso SET ? WHERE id = ?', [data, id], (err, rows) => {
        res.redirect('/cursos');
      });
    });
  }

module.exports = {
    index: index,
    create: create,
    store: store,
    destroy: destroy,
    edit: edit,
    update: update,
};
