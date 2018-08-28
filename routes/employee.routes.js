const Employee = require('../models/employee.model');
const config = require('../config/database.config');

module.exports = (router) => {

    router.post('/newEmployee', (req, res) => {
        if (!req.body.employeeName) {
            res.json({ success: false, message: 'Event name is required.' });
        }else{
            if(!req.body.employeeSchool){
                res.json({ success: false, message: 'employeeSchool name is required.' });
            }else{
                const employee = new Employee({
                    employeeName: req.body.employeeName,
                    employeeSchool: req.body.employeeSchool,             
                });
                employee.save((err) => {

                    if (err) {
                        if(err.errors){
                            if(err.errors.employeeName){
                                res.json({ success: false, message: err.errors.employeeName.message });
                            }else{
                                if(err.errors.employeeSchool){
                                    res.json({ success: false, message: err.errors.employeeSchool.message });
                                }else{
                                    res.json({ success: false, message: err });
                                }
                            }
                        }
                    }else {
                        res.json({ success: true, message: 'Employee is Created' });
                    }



                });
            }
        }
       
    });

router.get('/allEmployee', (req, res) => {
    Employee.find({}, (err, employee) => {
        if (err) {
            res.json({ success: false, message: err });
        }else{
            if(!employee){
                res.json({ success: false, message: "No Event Found" });
            }else{
                res.json({ success: true, employee: employee });
            }
        }

    }).sort({'_id':-1});

});
return router;
};
