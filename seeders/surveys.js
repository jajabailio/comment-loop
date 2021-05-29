import { Seeder } from 'mongoose-data-seed';
import { Survey } from '../models';
 
const data = [
    {
        isActive: true,
        _id: "60b1f6f6d9d7335153f40d74"
        // question: {
        //     text: "Leave feedback regarding to..."
        // },
        // options: [
        //     {
        //         text: "Food",
        //         order_number: 2
        //     },
        //     {
        //         text: "Service",
        //         order_number: 1
        //     },
        //     {
        //         text: "Atmosphere",
        //         order_number: 3
        //     }
        // ]
    }
];
 
class SurveysSeeder extends Seeder {
  async shouldRun() {
    return Survey.countDocuments()
      .exec()
      .then(count => count === 0);
  }
 
  async run() {
    return User.create(data);
  }
}
 
export default SurveysSeeder;