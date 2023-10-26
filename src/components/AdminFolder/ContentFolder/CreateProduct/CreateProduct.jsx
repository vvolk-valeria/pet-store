import { useRef, useState } from 'react';
import css from './CreateProduct.module.scss'
import { BsDownload } from 'react-icons/bs';

const CreateProduct = () => {
    const [images, setImages] = useState(new Array(7).fill(null));
    const imageContainers = [1, 2, 3, 4, 5, 6, 7];
    console.log("images", images);
    
    const handleImageDrop = (e, index) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const newImages = [...images];
                newImages[index] = e.target.result;
                setImages(newImages);
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleImageClick = (index) => {
        const fileInput = document.getElementById(`fileInput-${index}`);
        fileInput.click();
    };
    
    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const newImages = [...images];
                newImages[index] = e.target.result;
                setImages(newImages);
            };
            reader.readAsDataURL(file);
        }
    };
    
    return (
        <div className={css.productContainer}>
            <div className={css.firstLine}>
                <p>Product information</p>
            </div>

            <h3>Product photo</h3>
            <section className={css.firstSection}>
                {imageContainers.map(index => (
                    <div key={index} className={css.imageUploadWindow}>
                        <div
                            className={css.imageUploadArea}
                            onDrop={(e) => handleImageDrop(e, index)}
                            onDragOver={(e) => e.preventDefault()}
                            onClick={() => handleImageClick(index)}
                        >
                            {images[index] ? (
                                <img src={images[index]} alt="Uploaded" />
                            ) : (
                                <BsDownload />
                            )}
                        </div>
                        <input
                            id={`fileInput-${index}`}
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={(e) => handleImageChange(e, index)}
                        />
                    </div>
                ))}
                
            </section>
            <p>The size of the uploaded image must be under 10Mb (.png, .jpeg), max. 7 image </p>

            <h3>Product information</h3>
            <h3>Basic information</h3>
            <section>
                <p>Name</p>
                <input />
                <div>
                    <p>Category</p>
                    <input placeholder="Food" />
                    <p>Brand</p>
                    <input placeholder="wiskas" />
                </div>
                <div>
                    <p>Availability</p>
                    <input placeholder="Food" />
                    <p>Price per unit</p>
                    <input placeholder="wiskas" />
                    <p>Price on discount</p>
                    <input placeholder="wiskas" />
                </div>
                <div>
                    <p>Material</p>
                    <input placeholder="Food" />
                    <p>Color</p>
                    <input placeholder="wiskas" />
                </div>
                <div>
                    <p>Age</p>
                    <input placeholder="Food" />
                    <p>Size</p>
                    <input placeholder="wiskas" />
                </div>
                <div>
                    <p>Weight</p>
                    <input placeholder="Food" />
                    <p>Size</p>
                    <button /> 
                </div>
            </section>
            <h3>Additionsl information</h3>
            <section>
                <div>
                    <p>Prescription</p>
                    <input placeholder="Food" />
                    <p>Contraindications</p>
                    <input placeholder="wiskas" /> 
                </div>
                <div>
                    <p>Description</p>
                    <input placeholder="Food" />
                </div>
                <div>
                    <p>Instruction</p>
                    <input placeholder="Food" />
                </div>
            </section>

            <div>
                <button>Confirn</button>
                <button>Cancel</button>
            </div>

        </div>
    )

}

export default CreateProduct;