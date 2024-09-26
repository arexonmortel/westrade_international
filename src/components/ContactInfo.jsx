/* eslint-disable react/prop-types */


function ContactInfo({ icon, title, content }) {
  return (
  <div className="flex space-x-4">
    <div className="flex-shrink-0 mt-1 text-royalBlue">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      {Array.isArray(content) ? (
        content.map((item, index) => (
          <div key={index}>
            {typeof item === 'object' ? (
              <>
                <p className="text-darkBlue font-medium">{item.label}</p>
                {item.numbers.map((number, idx) => (
                  <a key={idx} href={`tel:${number}`} className="block text-royalBlue hover:underline">
                    {number}
                  </a>
                ))}
              </>
            ) : (
              <p className="text-darkBlue">{item}</p>
            )}
          </div>
        ))
      ) : (
        <a href={`mailto:${content}`} className="text-royalBlue hover:underline">
          {content}
        </a>
      )}
    </div>
  </div>

   
  )
}

export default ContactInfo
